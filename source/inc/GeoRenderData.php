<?php
require '../../vendor/autoload.php';
use GeoIp2\Database\Reader;

class IPInfo {
    private $cityDbReader;
    
    public function __construct() {
        $this->cityDbReader = new Reader('../../db/GeoLite2-City.mmdb');
    }
    
    public function getInfo($ip) {
        $record = $this->cityDbReader->city($ip);
        
        $info = new stdClass();
        $info->country = $record->country->name;
        $info->postcode = $record->postal->code;
        $info->city = $record->city->name;
        $info->timezone = $this->timezoneDbConverter($record->location->latitude, $record->location->longitude, $record->country->isoCode);
        $info->accuracyRadius = $record->location->accuracyRadius;
        
        return $info;
    }
    
    private function timezoneDbConverter($lat, $long, $countryCode) {
        $api_key = 'AIzaSyD8EOfzCZ12eOXAsKShGXi0B9QYkHyVn1A';
        $url = "https://maps.googleapis.com/maps/api/timezone/json?location={$lat},{$long}&timestamp=" . time() . "&key={$api_key}&sensor=false&language=en&region={$countryCode}";
        $response = file_get_contents($url);
        $data = json_decode($response, true);
        if($data['status'] == 'OK') {
            return $data['timeZoneId'];
        } else {
            throw new Exception('Unable to retrieve timezone information.');
        }
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ips = $_POST["ips"];
    $ip_array = explode(" ", $ips);
    $ip_array = array_unique($ip_array);

    // Initialize the table HTML
    $table_html = '<table class="table table-striped table-bordered">
                    <tr>
                    <th class="text-center">Country</th>
                    <th class="text-center">Postcode</th>
                    <th class="text-center">City</th>
                    <th>Timezone</th>
                    <th class="text-center">Accuracy Radius</th>
                    </tr>';

    $ipInfo = new IPInfo();

    foreach ($ip_array as $ip) {
        $info = $ipInfo->getInfo($ip);

        // Add a row to the table for each IP
        $table_html .= '<tr>';
        $table_html .= '<td>' . $info->country . '</td>';
        $table_html .= '<td>' . $info->postcode . '</td>';
        $table_html .= '<td>' . $info->city . '</td>';
        $table_html .= '<td>' . $info->timezone . '</td>';
        $table_html .= '<td>' . $info->accuracyRadius . '</td>';
        $table_html .= '</tr>';
    }
    $table_html .= '</table>';

    // Send the table HTML as the response
    echo $table_html;
}

?>
