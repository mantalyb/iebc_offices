var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.501000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.705000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Constituency_2 = new ol.format.GeoJSON();
var features_Constituency_2 = format_Constituency_2.readFeatures(json_Constituency_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Constituency_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constituency_2.addFeatures(features_Constituency_2);
var lyr_Constituency_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Constituency_2, 
                style: style_Constituency_2,
                popuplayertitle: 'Constituency',
                interactive: false,
                title: '<img src="styles/legend/Constituency_2.png" /> Constituency'
            });
var format_County_3 = new ol.format.GeoJSON();
var features_County_3 = format_County_3.readFeatures(json_County_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_3.addFeatures(features_County_3);
var lyr_County_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_3, 
                style: style_County_3,
                popuplayertitle: 'County',
                interactive: false,
                title: '<img src="styles/legend/County_3.png" /> County'
            });
var format_IEBCOffice_4 = new ol.format.GeoJSON();
var features_IEBCOffice_4 = format_IEBCOffice_4.readFeatures(json_IEBCOffice_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IEBCOffice_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IEBCOffice_4.addFeatures(features_IEBCOffice_4);
cluster_IEBCOffice_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IEBCOffice_4
});
var lyr_IEBCOffice_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IEBCOffice_4, 
                style: style_IEBCOffice_4,
                popuplayertitle: 'IEBC Office',
                interactive: true,
    title: 'IEBC Office<br />\
    <img src="styles/legend/IEBCOffice_4_0.png" /> Constituency<br />\
    <img src="styles/legend/IEBCOffice_4_1.png" /> County<br />\
    <img src="styles/legend/IEBCOffice_4_2.png" /> Warehouse<br />' });

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(false);lyr_Constituency_2.setVisible(true);lyr_County_3.setVisible(true);lyr_IEBCOffice_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Constituency_2,lyr_County_3,lyr_IEBCOffice_4];
lyr_Constituency_2.set('fieldAliases', {'FID_1': 'FID_1', 'Const Name': 'Const Name', 'ConstCode': 'ConstCode', });
lyr_County_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'County Nam': 'County Nam', 'County Cod': 'County Cod', });
lyr_IEBCOffice_4.set('fieldAliases', {'CountyName': 'CountyName', 'Office': 'Office', 'ConstituencyName': 'ConstituencyName', 'PhysicalLocation': 'PhysicalLocation', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Contacts': 'Contacts', });
lyr_Constituency_2.set('fieldImages', {'FID_1': 'TextEdit', 'Const Name': 'TextEdit', 'ConstCode': 'TextEdit', });
lyr_County_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'County Nam': 'TextEdit', 'County Cod': 'Range', });
lyr_IEBCOffice_4.set('fieldImages', {'CountyName': 'TextEdit', 'Office': 'TextEdit', 'ConstituencyName': 'TextEdit', 'PhysicalLocation': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Contacts': 'TextEdit', });
lyr_Constituency_2.set('fieldLabels', {'FID_1': 'no label', 'Const Name': 'no label', 'ConstCode': 'no label', });
lyr_County_3.set('fieldLabels', {'OBJECTID': 'no label', 'County Nam': 'no label', 'County Cod': 'no label', });
lyr_IEBCOffice_4.set('fieldLabels', {'CountyName': 'no label', 'Office': 'hidden field', 'ConstituencyName': 'no label', 'PhysicalLocation': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Contacts': 'no label', });
lyr_IEBCOffice_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});