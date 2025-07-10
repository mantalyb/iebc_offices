var size = 0;
var placement = 'point';

var style_County_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#464646";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.4000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("County Nam") !== null) {
        labelText = String(feature.get("County Nam"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(70,70,70,0.662)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
