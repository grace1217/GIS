import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

import Cesium3DTileset from "cesium/Source/Scene/Cesium3DTileset";
import Cesium3DTileStyle from "cesium/Source/Scene/Cesium3DTileStyle";

import Cartesian3 from "cesium/Source/Core/Cartesian3";import createWorldTerrain from "cesium/Source/Core/createWorldTerrain";
import HeadingPitchRoll from "cesium/Source/Core/HeadingPitchRoll";
import IonResource from "cesium/Source/Core/IonResource";
import Matrix4 from "cesium/Source/Core/Matrix4";

//import Sandcastle from "../cesium/Apps/Sandcastle/Sandcastle-header";

class FHouse extends Component{
componentDidMount() {
// A demo of interactive 3D Tiles styling
// Styling language Documentation: https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/Styling
// Building data courtesy of NYC OpenData portal: http://www1.nyc.gov/site/doitt/initiatives/3d-building.page
var viewer = new Viewer('cesiumContainer', {
    terrainProvider: createWorldTerrain(),
    animation: false,
    baseLayerPicker: false,
    timeline: false,
    navigationHelpButton: false
});

viewer.scene.globe.depthTestAgainstTerrain = true;

// Set the initial camera view to look at Manhattan
var initialPosition = Cartesian3.fromDegrees(-74.01881302800248, 40.69114333714821, 753);
var initialOrientation = new HeadingPitchRoll.fromDegrees(21.27879878293835, -21.34390550872461, 0.0716951918898415);
viewer.scene.camera.setView({
    destination: initialPosition,
    orientation: initialOrientation,
    endTransform: Matrix4.IDENTITY
});

// Load the NYC buildings tileset.
var tileset = new Cesium3DTileset({ url: IonResource.fromAssetId(4693) });
viewer.scene.primitives.add(tileset);

// Color buildings based on their height.
/*function colorByHeight() {
    tileset.style = new Cesium3DTileStyle({
        color: {
            conditions: [
                ["{height} >= 300", "rgba(45, 0, 75, 0.5)"],
                ["{height} >= 200", "rgb(102, 71, 151)"],
                ["{height} >= 100", "rgb(170, 162, 204)"],
                ["{height} >= 50", "rgb(224, 226, 238)"],
                ["{height} >= 25", "rgb(252, 230, 200)"],
                ["{height} >= 10", "rgb(248, 176, 87)"],
                ["{height} >= 5", "rgb(198, 106, 11)"],
                ["true", "rgb(127, 59, 8)"]
            ]
        }
    });
}

// Color buildings by their latitude coordinate.
function colorByLatitude() {
    tileset.style = new Cesium3DTileStyle({
        defines: {
            latitudeRadians: "radians(${latitude})"
        },
        color: {
            conditions: [
                ["${latitudeRadians} >= 0.7125", "color('purple')"],
                ["${latitudeRadians} >= 0.712", "color('red')"],
                ["${latitudeRadians} >= 0.7115", "color('orange')"],
                ["${latitudeRadians} >= 0.711", "color('yellow')"],
                ["${latitudeRadians} >= 0.7105", "color('lime')"],
                ["${latitudeRadians} >= 0.710", "color('cyan')"],
                ["true", "color('blue')"]
            ]
        }
    });
}

// Color buildings by distance from a landmark.
function colorByDistance() {
    tileset.style = new Cesium3DTileStyle({
        defines : {
            distance : "distance(vec2(radians(${longitude}), radians(${latitude})), vec2(-1.291777521, 0.7105706624))"
        },
        color : {
            conditions : [
                ["${distance} > 0.0012","color('gray')"],
                ["${distance} > 0.0008", "mix(color('yellow'), color('red'), (${distance} - 0.008) / 0.0004)"],
                ["${distance} > 0.0004", "mix(color('green'), color('yellow'), (${distance} - 0.0004) / 0.0004)"],
                ["${distance} < 0.00001", "color('white')"],
                ["true", "mix(color('blue'), color('green'), ${distance} / 0.0004)"]
            ]
        }
    });
}

// Show only buildings greater than 200 meters in height.
function hideByHeight() {
    tileset.style = new Cesium3DTileStyle({
        show : "${height} > 200"
    });
}

Sandcastle.addToolbarMenu([{
    text : 'Color By Height',
    onselect : function() {
        colorByHeight();
    }
}, {
    text : 'Color By Latitude',
    onselect : function() {
        colorByLatitude();
    }
}, {
    text : 'Color By Distance',
    onselect : function() {
        colorByDistance();
    }
}, {
    text : 'Hide By Height',
    onselect : function() {
        hideByHeight();
    }
}]);


colorByHeight();*/

}
//const lists = ['a','b','c']
render(){
	return(
		<div>
			<div id="cesiumContainer" className="fullSize"></div>
			<div id="loadingOverlay"><h1>Loading...</h1></div>
			<div id="toolbar">

			</div>
		</div>
	)
}
}

export default FHouse