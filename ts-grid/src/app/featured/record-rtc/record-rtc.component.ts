import { CommonService } from './../../services/common/common.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as RecordRTC from 'recordrtc';

@Component({
  selector: 'app-record-rtc',
  templateUrl: './record-rtc.component.html',
  styleUrls: ['./record-rtc.component.scss']
})
export class RecordRTCComponent implements AfterViewInit {

  private stream: MediaStream;
  private recordRTC: any;

  @ViewChild('video') video;

  constructor(
    private commonService: CommonService
  ) {
    this.commonService.setRouteValue('record');
  }

  ngAfterViewInit() {
    // set the initial state of the video
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {
    const video: HTMLVideoElement = this.video.nativeElement;
    const options: any = {
      mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
      bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
      checkForInactiveTracks: true,
      timeSlice: 1000, // concatenate intervals based blobs
      ignoreMutedMedia: true
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    // HANDLE ERRORS HERE
  }

  processVideo(audioVideoWebMURL) {
    const video: HTMLVideoElement = this.video.nativeElement;
    const recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    const recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  startRecording() {
    const mediaConstraints = {
      /* video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        }
      }, */
      video: true,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(
      this.successCallback.bind(this),
      this.errorCallback.bind(this)
    );
  }

  stopRecording() {
    const recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    const stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }

  download() {
    this.recordRTC.save('video.webm');
  }
}
