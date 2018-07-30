import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

import Cesium3DTileset from "cesium/Source/Scene/Cesium3DTileset";

import IonResource from "cesium/Source/Core/IonResource";


/*import Cartesian3 from "cesium/Source/Core/Cartesian3";
import ClockRange from "cesium/Source/Core/ClockRange";
import ClockRange from "cesium/Source/Core/ClockRange";
import TimeIntervalCollection from 'cesium/Source/Core/TimeIntervalCollection'
import TimeInterval from 'cesium/Source/Core/TimeInterval'
import JulianDate from 'cesium/Source/Core/JulianDate'

import ArcGisMapServerImageryProvider from "cesium/Source/Scene/ArcGisMapServerImageryProvider";

import SampledPositionProperty from "cesium/Source/DataSources/SampledPositionProperty";

import VelocityOrientationProperty from "cesium/Source/DataSources/VelocityOrientationProperty";


const url = '../cesium/Apps/SampleData/models/CesiumMan/Cesium_Man.glb'*/
class FThermo extends Component{
componentDidMount() {
var viewer = new Viewer('cesiumContainer');

var tileset = new Cesium3DTileset({
    url: IonResource.fromAssetId(3836)
});

viewer.scene.primitives.add(tileset);
viewer.zoomTo(tileset);



}
render(){
	return(
		<div>
			<div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
			
		</div>
	)
}
}

export default FThermo