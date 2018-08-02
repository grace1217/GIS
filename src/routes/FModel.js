import React, { Component } from 'react';

class FModel extends Component{
	componentDidMount() {
		this.viewer = new Cesium.Viewer(this.refs.map);
	    var tileset = this.viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
	      url : 'http://localhost:8003/tilesets/TilesetWithTreeBillboards/tileset.json'
	    }));
	    
	    this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0, -0.5, 0));  //HeadingPitchRange(航向角，俯视角，范围)
	    //航向是一个从正北方向的旋转，其中正角向东增加。俯仰是从局部XY平面的旋转。正俯仰角在平面之上。负的斜齿轮在平面以下。距离是帧中心的距离。
	}
	componentWillUnmount() {
    	this.viewer = null;
  	}
	render(){
		return (
			<div className="pt-container">
        		<div className="map-image" ref="map" />
      		</div>
		)
	}
}

export default FModel;