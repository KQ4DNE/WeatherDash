const topBarCenterText = `FFX DEMS`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  [
    "FF000F",
    "WEA Alerts",
    "https://warn.pbs.org/",
    "1",
  ],
  ["FF000F", "NWS SAFER Hazard", "https://www.arcgis.com/apps/MapSeries/index.html?appid=ea8b0eeb2e9c45b790329c0ed2fdc225", "1", "L"],
  ["FF000F", "WX Alerts", "https://alerts.weather.gov/search?zone=VAC059", "1", "L"],
  ["2196F3", "Air Quality", "https://gispub.epa.gov/airnow/?forecastcontours=forecasttomorrow&tab=loops&xmin=-8868923.932654787&xmax=-8347011.903523855&ymin=4578979.162561644&ymax=4779855.67289499", "1"],
  ["2196F3", "NOAA HRRR-Smoke", "https://apps.gsl.noaa.gov/smoke/", "1"],
  ["2196F3", "Rain Totals", "https://maps.cocorahs.org/?maptype=precip&datetype=daily&center=38.8474,-77.3757", "1"],
  [
    "2196F3",
    "Solar Ham",
    "https://solarham.com/",
    "1",
  ],	
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  [
    "2196F3",
    "RADAR",
    "https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJ3ZWF0aGVyIiwiY2VudGVyIjpbLTc3LjIxOSwzOC44MzldLCJsb2NhdGlvbiI6Wy03Ny4yMTksMzguODQ1XSwiem9vbSI6MTAuNzMyMzQ2OTUyNDUwMTI3fSwiYW5pbWF0aW5nIjp0cnVlLCJiYXNlIjoic3RhbmRhcmQiLCJhcnRjYyI6ZmFsc2UsImNvdW50eSI6dHJ1ZSwiY3dhIjpmYWxzZSwicmZjIjpmYWxzZSwic3RhdGUiOmZhbHNlLCJtZW51Ijp0cnVlLCJzaG9ydEZ1c2VkT25seSI6ZmFsc2UsIm9wYWNpdHkiOnsiYWxlcnRzIjowLjgsImxvY2FsIjowLjYsImxvY2FsU3RhdGlvbnMiOjAuOCwibmF0aW9uYWwiOjAuNn19",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=38.8474&lon=-77.3757&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "Sartopo",
    "https://sartopo.com/map.html#ll=38.80547,-98.39355&z=5&b=mbt",
    "1",
    "R",
  ],
  [
    "2196F3",
    "Surface Analysis",
    "https://www.wpc.ncep.noaa.gov/html/sfc-zoom.php",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://www.ventusky.com/?p=38.79;-77.16;8&l=wind-10m",
    "1",
    "R",
  ],
  [
    "2196F3",
    "Power Outage",
    "https://ncrgdx.maps.arcgis.com/apps/dashboards/aa782813789c41a3b0b8fee04f01b2e6",
    "1",
    "R",
  ],
  [
    "2196F3",
    "ADS-B",
    "https://globe.adsbexchange.com/",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  [
    "RADAR", 
    "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif"
  ],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KLWX_loop.gif",
  ],
  [
    "",
    "https://www.weather.gov/images/lwx/weatherstory.gif",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=EDT&sector=CONUS&element=t&n=4",
    "https://www.wpc.ncep.noaa.gov/heat_index_MAX/bchi_day3.gif",
    "https://www.cpc.ncep.noaa.gov/products/stratosphere/uv_index/uvi_map.gif",
  ],
  [
     "Forecast & Activity",
	"https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
	"https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif",
	"https://www.spc.noaa.gov/products/watch/validww.png",
	"https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif",
	"https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png",
	"https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
	"https://forecast.weather.gov/wwamap/png/lwx.png",
  ],
  [
    "SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
  ],
  [
    "Local SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/ne/GEOCOLOR/GOES16-NE-GEOCOLOR-600x600.gif",
  ],
 [
    "FFX Traffic",
    "https://cctv.trafficview.org/thumbnail/VDOT_179",
    "https://cctv.trafficview.org/thumbnail/VDOT_1025",
    "https://cctv.trafficview.org/thumbnail/VDOT_1025",
    "https://cctv.trafficview.org/thumbnail/VDOT_1435",
    "https://cctv.trafficview.org/thumbnail/VDOT_1450",
    "https://cctv.trafficview.org/thumbnail/VDOT_1713",
    "https://cctv.trafficview.org/thumbnail/VDOT_1710",
    "https://cctv.trafficview.org/thumbnail/VDOT_1454",
    "https://cctv.trafficview.org/thumbnail/VDOT_3660",
    "https://cctv.trafficview.org/thumbnail/VDOT_1708",
    "https://cctv.trafficview.org/thumbnail/VDOT_1432",
    "https://cctv.trafficview.org/thumbnail/VDOT_154",
    "https://cctv.trafficview.org/thumbnail/VDOT_1442",
  ],
  [
    "Derived Motion Winds",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/DMW/GOES16-ABI-CONUS-DMW.gif",
  ],
  [
    "Tropical Outlook",
    "https://ocean.weather.gov/shtml/ira1.gif",		  
    "https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",	
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/Sandwich/GOES16-TAW-Sandwich-900x540.gif",
  ],
  [
    "Charts & Fronts",
    "https://www.wpc.ncep.noaa.gov/sfc/namussfc12wbg.gif",
    "https://www.wpc.ncep.noaa.gov/medr/9jhwbg_conus.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/10/latest.jpg",
  ],
  [
    "Rain Total",
    "https://www.cocorahs.org/Maps/GetMap.aspx?state=VA&county=FX&type=precip",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
];
