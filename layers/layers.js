var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Wards_1 = new ol.format.GeoJSON();
var features_Wards_1 = format_Wards_1.readFeatures(json_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_1.addFeatures(features_Wards_1);
var lyr_Wards_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wards_1, 
                style: style_Wards_1,
                popuplayertitle: "Wards",
                interactive: true,
                title: 'Wards'
            });
var format_ResidendialArea_2 = new ol.format.GeoJSON();
var features_ResidendialArea_2 = format_ResidendialArea_2.readFeatures(json_ResidendialArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidendialArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidendialArea_2.addFeatures(features_ResidendialArea_2);
var lyr_ResidendialArea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResidendialArea_2, 
                style: style_ResidendialArea_2,
                popuplayertitle: "Residendial Area",
                interactive: true,
                title: 'Residendial Area'
            });
var format_HathazariRoad_3 = new ol.format.GeoJSON();
var features_HathazariRoad_3 = format_HathazariRoad_3.readFeatures(json_HathazariRoad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HathazariRoad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HathazariRoad_3.addFeatures(features_HathazariRoad_3);
var lyr_HathazariRoad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HathazariRoad_3, 
                style: style_HathazariRoad_3,
                popuplayertitle: "Hathazari Road",
                interactive: true,
                title: 'Hathazari Road'
            });
var format_ElectionCenters_4 = new ol.format.GeoJSON();
var features_ElectionCenters_4 = format_ElectionCenters_4.readFeatures(json_ElectionCenters_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectionCenters_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectionCenters_4.addFeatures(features_ElectionCenters_4);
var lyr_ElectionCenters_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectionCenters_4, 
                style: style_ElectionCenters_4,
                popuplayertitle: "Election Centers",
                interactive: true,
                title: 'Election Centers'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Wards_1.setVisible(true);lyr_ResidendialArea_2.setVisible(true);lyr_HathazariRoad_3.setVisible(true);lyr_ElectionCenters_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Wards_1,lyr_ResidendialArea_2,lyr_HathazariRoad_3,lyr_ElectionCenters_4];
lyr_Wards_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_ResidendialArea_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_HathazariRoad_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ElectionCenters_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Wards_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_ResidendialArea_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_HathazariRoad_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ElectionCenters_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Wards_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_ResidendialArea_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_HathazariRoad_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ElectionCenters_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ElectionCenters_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});