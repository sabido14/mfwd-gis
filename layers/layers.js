ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([124.578196, 8.220592, 125.193091, 8.527548]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_1.png" /> Roads'
            });
var format_ServiceArea_2 = new ol.format.GeoJSON();
var features_ServiceArea_2 = format_ServiceArea_2.readFeatures(json_ServiceArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ServiceArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_2.addFeatures(features_ServiceArea_2);
var lyr_ServiceArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_2, 
                style: style_ServiceArea_2,
                popuplayertitle: 'Service Area',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea_2.png" /> Service Area'
            });
var format_PumpStationsSystem2_3 = new ol.format.GeoJSON();
var features_PumpStationsSystem2_3 = format_PumpStationsSystem2_3.readFeatures(json_PumpStationsSystem2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PumpStationsSystem2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PumpStationsSystem2_3.addFeatures(features_PumpStationsSystem2_3);
var lyr_PumpStationsSystem2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PumpStationsSystem2_3, 
                style: style_PumpStationsSystem2_3,
                popuplayertitle: 'Pump Stations (System 2)',
                interactive: true,
                title: '<img src="styles/legend/PumpStationsSystem2_3.png" /> Pump Stations (System 2)'
            });
var format_PumpStationsSystem1_4 = new ol.format.GeoJSON();
var features_PumpStationsSystem1_4 = format_PumpStationsSystem1_4.readFeatures(json_PumpStationsSystem1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PumpStationsSystem1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PumpStationsSystem1_4.addFeatures(features_PumpStationsSystem1_4);
var lyr_PumpStationsSystem1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PumpStationsSystem1_4, 
                style: style_PumpStationsSystem1_4,
                popuplayertitle: 'Pump Stations (System 1)',
                interactive: true,
                title: '<img src="styles/legend/PumpStationsSystem1_4.png" /> Pump Stations (System 1)'
            });
var format_Valves_5 = new ol.format.GeoJSON();
var features_Valves_5 = format_Valves_5.readFeatures(json_Valves_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Valves_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valves_5.addFeatures(features_Valves_5);
var lyr_Valves_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valves_5, 
                style: style_Valves_5,
                popuplayertitle: 'Valves',
                interactive: true,
                title: '<img src="styles/legend/Valves_5.png" /> Valves'
            });
var format_ReservoirSystem2_6 = new ol.format.GeoJSON();
var features_ReservoirSystem2_6 = format_ReservoirSystem2_6.readFeatures(json_ReservoirSystem2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ReservoirSystem2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservoirSystem2_6.addFeatures(features_ReservoirSystem2_6);
var lyr_ReservoirSystem2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservoirSystem2_6, 
                style: style_ReservoirSystem2_6,
                popuplayertitle: 'Reservoir (System 2)',
                interactive: true,
                title: '<img src="styles/legend/ReservoirSystem2_6.png" /> Reservoir (System 2)'
            });
var format_ReservoirSystem1_7 = new ol.format.GeoJSON();
var features_ReservoirSystem1_7 = format_ReservoirSystem1_7.readFeatures(json_ReservoirSystem1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ReservoirSystem1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservoirSystem1_7.addFeatures(features_ReservoirSystem1_7);
var lyr_ReservoirSystem1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservoirSystem1_7, 
                style: style_ReservoirSystem1_7,
                popuplayertitle: 'Reservoir (System 1)',
                interactive: true,
                title: '<img src="styles/legend/ReservoirSystem1_7.png" /> Reservoir (System 1)'
            });
var format_PointSystem2_8 = new ol.format.GeoJSON();
var features_PointSystem2_8 = format_PointSystem2_8.readFeatures(json_PointSystem2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PointSystem2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointSystem2_8.addFeatures(features_PointSystem2_8);
var lyr_PointSystem2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointSystem2_8, 
                style: style_PointSystem2_8,
                popuplayertitle: 'Point (System 2)',
                interactive: true,
                title: '<img src="styles/legend/PointSystem2_8.png" /> Point (System 2)'
            });
var format_System2_9 = new ol.format.GeoJSON();
var features_System2_9 = format_System2_9.readFeatures(json_System2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_System2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_System2_9.addFeatures(features_System2_9);
var lyr_System2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_System2_9, 
                style: style_System2_9,
                popuplayertitle: 'System 2',
                interactive: true,
    title: 'System 2<br />\
    <img src="styles/legend/System2_9_0.png" /> 50<br />\
    <img src="styles/legend/System2_9_1.png" /> 64<br />\
    <img src="styles/legend/System2_9_2.png" /> 75<br />\
    <img src="styles/legend/System2_9_3.png" /> 100<br />\
    <img src="styles/legend/System2_9_4.png" /> 150<br />\
    <img src="styles/legend/System2_9_5.png" /> 200<br />\
    <img src="styles/legend/System2_9_6.png" /> <br />' });
var format_System1_10 = new ol.format.GeoJSON();
var features_System1_10 = format_System1_10.readFeatures(json_System1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_System1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_System1_10.addFeatures(features_System1_10);
var lyr_System1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_System1_10, 
                style: style_System1_10,
                popuplayertitle: 'System 1',
                interactive: true,
    title: 'System 1<br />\
    <img src="styles/legend/System1_10_0.png" /> 20<br />\
    <img src="styles/legend/System1_10_1.png" /> 25<br />\
    <img src="styles/legend/System1_10_2.png" /> 40<br />\
    <img src="styles/legend/System1_10_3.png" /> 50<br />\
    <img src="styles/legend/System1_10_4.png" /> 65<br />\
    <img src="styles/legend/System1_10_5.png" /> 75<br />\
    <img src="styles/legend/System1_10_6.png" /> 85<br />\
    <img src="styles/legend/System1_10_7.png" /> 100<br />\
    <img src="styles/legend/System1_10_8.png" /> 150<br />\
    <img src="styles/legend/System1_10_9.png" /> 200<br />\
    <img src="styles/legend/System1_10_10.png" /> <br />' });
var format_Waterways_11 = new ol.format.GeoJSON();
var features_Waterways_11 = format_Waterways_11.readFeatures(json_Waterways_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waterways_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_11.addFeatures(features_Waterways_11);
var lyr_Waterways_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_11, 
                style: style_Waterways_11,
                popuplayertitle: 'Waterways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_11.png" /> Waterways'
            });
var format_Buildings_12 = new ol.format.GeoJSON();
var features_Buildings_12 = format_Buildings_12.readFeatures(json_Buildings_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buildings_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_12.addFeatures(features_Buildings_12);
var lyr_Buildings_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_12, 
                style: style_Buildings_12,
                popuplayertitle: 'Buildings',
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_12_0.png" /> apartments<br />\
    <img src="styles/legend/Buildings_12_1.png" /> chapel<br />\
    <img src="styles/legend/Buildings_12_2.png" /> church<br />\
    <img src="styles/legend/Buildings_12_3.png" /> commercial<br />\
    <img src="styles/legend/Buildings_12_4.png" /> farm_auxiliary<br />\
    <img src="styles/legend/Buildings_12_5.png" /> guardhouse<br />\
    <img src="styles/legend/Buildings_12_6.png" /> hospital<br />\
    <img src="styles/legend/Buildings_12_7.png" /> house<br />\
    <img src="styles/legend/Buildings_12_8.png" /> industrial<br />\
    <img src="styles/legend/Buildings_12_9.png" /> public<br />\
    <img src="styles/legend/Buildings_12_10.png" /> residential<br />\
    <img src="styles/legend/Buildings_12_11.png" /> retail<br />\
    <img src="styles/legend/Buildings_12_12.png" /> roof<br />\
    <img src="styles/legend/Buildings_12_13.png" /> school<br />\
    <img src="styles/legend/Buildings_12_14.png" /> shed<br />\
    <img src="styles/legend/Buildings_12_15.png" /> transportation<br />\
    <img src="styles/legend/Buildings_12_16.png" /> warehouse<br />\
    <img src="styles/legend/Buildings_12_17.png" /> yes<br />\
    <img src="styles/legend/Buildings_12_18.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_ServiceArea_2.setVisible(true);lyr_PumpStationsSystem2_3.setVisible(true);lyr_PumpStationsSystem1_4.setVisible(true);lyr_Valves_5.setVisible(true);lyr_ReservoirSystem2_6.setVisible(true);lyr_ReservoirSystem1_7.setVisible(true);lyr_PointSystem2_8.setVisible(true);lyr_System2_9.setVisible(true);lyr_System1_10.setVisible(true);lyr_Waterways_11.setVisible(true);lyr_Buildings_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Roads_1,lyr_ServiceArea_2,lyr_PumpStationsSystem2_3,lyr_PumpStationsSystem1_4,lyr_Valves_5,lyr_ReservoirSystem2_6,lyr_ReservoirSystem1_7,lyr_PointSystem2_8,lyr_System2_9,lyr_System1_10,lyr_Waterways_11,lyr_Buildings_12];
lyr_Roads_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_ServiceArea_2.set('fieldAliases', {'Name': 'Name', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'Name_4': 'Name_4', 'NAME_0_2': 'NAME_0_2', 'NAME_1_2': 'NAME_1_2', 'NAME_2_2': 'NAME_2_2', 'NAME_3_2': 'NAME_3_2', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0_3': 'NAME_0_3', 'ID_1': 'ID_1', 'NAME_1_3': 'NAME_1_3', 'ID_2': 'ID_2', 'NAME_2_3': 'NAME_2_3', 'ID_3': 'ID_3', 'NAME_3_3': 'NAME_3_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_PumpStationsSystem2_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_PumpStationsSystem1_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_Valves_5.set('fieldAliases', {'Name': 'Name', });
lyr_ReservoirSystem2_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_ReservoirSystem1_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_PointSystem2_8.set('fieldAliases', {'Name': 'Name', });
lyr_System2_9.set('fieldAliases', {'Name': 'Name', 'pipe_size': 'pipe_size', 'length': 'length', });
lyr_System1_10.set('fieldAliases', {'Name': 'Name', 'pipe_size': 'pipe_size', 'length': 'length', });
lyr_Waterways_11.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_fil': 'name_fil', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Buildings_12.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'building': 'building', 'building_l': 'building_l', 'building_m': 'building_m', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'office': 'office', 'source': 'source', 'name_fil': 'name_fil', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Roads_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', });
lyr_ServiceArea_2.set('fieldImages', {'Name': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'Name_4': 'TextEdit', 'NAME_0_2': 'TextEdit', 'NAME_1_2': 'TextEdit', 'NAME_2_2': 'TextEdit', 'NAME_3_2': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0_3': 'TextEdit', 'ID_1': 'Range', 'NAME_1_3': 'TextEdit', 'ID_2': 'Range', 'NAME_2_3': 'TextEdit', 'ID_3': 'Range', 'NAME_3_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_PumpStationsSystem2_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_PumpStationsSystem1_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Valves_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_ReservoirSystem2_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_ReservoirSystem1_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_PointSystem2_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_System2_9.set('fieldImages', {'Name': 'TextEdit', 'pipe_size': 'Range', 'length': 'TextEdit', });
lyr_System1_10.set('fieldImages', {'Name': 'TextEdit', 'pipe_size': 'Range', 'length': 'TextEdit', });
lyr_Waterways_11.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'blockage': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'name_fil': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_Buildings_12.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_m': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'office': 'TextEdit', 'source': 'TextEdit', 'name_fil': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_Roads_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_ServiceArea_2.set('fieldLabels', {'Name': 'no label', 'NAME_0': 'no label', 'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'Name_4': 'no label', 'NAME_0_2': 'no label', 'NAME_1_2': 'no label', 'NAME_2_2': 'no label', 'NAME_3_2': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0_3': 'no label', 'ID_1': 'no label', 'NAME_1_3': 'no label', 'ID_2': 'no label', 'NAME_2_3': 'no label', 'ID_3': 'no label', 'NAME_3_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'PROVINCE': 'no label', 'REGION': 'no label', });
lyr_PumpStationsSystem2_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_PumpStationsSystem1_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_Valves_5.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_ReservoirSystem2_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_ReservoirSystem1_7.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_PointSystem2_8.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_System2_9.set('fieldLabels', {'Name': 'inline label - visible with data', 'pipe_size': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_System1_10.set('fieldLabels', {'Name': 'inline label - visible with data', 'pipe_size': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_Waterways_11.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_fil': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Buildings_12.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_m': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'office': 'no label', 'source': 'no label', 'name_fil': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Buildings_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});