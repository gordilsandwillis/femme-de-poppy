import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import VideoThumb from '../../components/VideoThumb';

// import Button from '../Button';

import './videogridblock.scss';

export class VideoGridBlock extends Component {

	componentDidMount () {
		// console.log('this.props ::', this.props);
	}

	componentWillMount () {
	}

	className () {
		let className = 'video-grid container';
		if (this.props.cardStyle) {
			className += ' card';
		}
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	render() {

		return (
			<div className={this.className()}>
				<div className="grid-flex v-spaced center">
					{this.props.videos.map((video, index)=>{
						console.log('videogridblock video:', video)
						return (
							<div className="col" key={'video-'+index}>
								<VideoThumb
									imageSrc={"http:"+video.fields.videoThumbnail.fields.file.url}
									videoId={video.fields.youTubeVideoId}
									caption={video.fields.videoDescription}
								/>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default VideoGridBlock;