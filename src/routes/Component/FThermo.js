import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

import Cesium3DTileset from "cesium/Source/Scene/Cesium3DTileset";

import IonResource from "cesium/Source/Core/IonResource";
import HeadingPitchRange from "cesium/Source/Core/HeadingPitchRange";


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
this.viewer = new Viewer(this.refs.map);

    var tileset = this.viewer.scene.primitives.add(new Cesium3DTileset({
      url : 'http://localhost:8003/tilesets/TilesetWithTreeBillboards/tileset.json'
    }));
    
    this.viewer.zoomTo(tileset, new HeadingPitchRange(0, -0.5, 0));
  }

  componentWillUnmount() {
    this.viewer = null;
  }
  render() {
    return (
      <div className="pt-container">
        <div className="map-image" ref="map" />
      </div>
    );
  }
}

export default FThermo