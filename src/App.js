import React, { useState } from 'react'

import './App.scss'

import CssBaseline from '@material-ui/core/CssBaseline'

import { Header } from './components/Header'
import { AudioList } from './components/AudioList'
import { AudioControls } from './components/AudioControls'

const initialSelectedAudio = { name: '', audioElement: null }

export const App = () => {
  const [audios, setAudios] = useState([])
  const [selectedAudio, setSelectedAudio] = useState(initialSelectedAudio)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleChangeFile = event => {
    const audioFiles = []
    for (const file of event.target.files) {
      if (file.type.match('audio/*')) {
        audioFiles.push(file)
      }
    }

    setSelectedAudio(initialSelectedAudio)
    setAudios(
      audioFiles.map(audioFile => ({
        name: audioFile.name,
        audioElement: null
      }))
    )

    audioFiles.forEach((audioFile, index) => {
      const fileReader = new FileReader()
      fileReader.onload = event => {
        const audioElement = new Audio(event.target.result)
        audioElement.onended = () => audioPause(audioElement)
        setAudios(state =>
          state.map((audio, i) => {
            return i === index ? { ...audio, audioElement } : audio
          })
        )
      }
      fileReader.readAsDataURL(audioFile)
    })
  }

  const handleChangeCurrentTime = time => {
    selectedAudio.audioElement.currentTime += time
  }

  const handleChangePlaybackRate = speed => {
    selectedAudio.audioElement.playbackRate = speed
  }

  const handleClickAudio = audio => {
    if (selectedAudio.audioElement) {
      selectedAudio.audioElement.pause()
    }
    audioPlay(audio.audioElement)
    setSelectedAudio(audio)
  }

  const handleClickPlay = () => {
    if (selectedAudio.audioElement) {
      audioPlay(selectedAudio.audioElement)
    }
  }

  const handleClickPause = () => {
    if (selectedAudio.audioElement) {
      audioPause(selectedAudio.audioElement)
    }
  }

  const audioPlay = audioElement => {
    audioElement.play()
    setIsPlaying(true)
  }

  const audioPause = audioElement => {
    audioElement.pause()
    setIsPlaying(false)
  }

  return (
    <>
      <CssBaseline />
      <div className="grid-container">
        <div className="grid-header">
          <Header onChangeFile={handleChangeFile} />
        </div>
        <div className="grid-item grid-list">
          <AudioList
            audios={audios}
            selectedAudio={selectedAudio}
            onClickAudio={handleClickAudio}
          />
        </div>
        <div className="grid-item grid-controls">
          <AudioControls
            isPlaying={isPlaying}
            onClickPlay={handleClickPlay}
            onClickPause={handleClickPause}
            onChangeCurrentTime={handleChangeCurrentTime}
            onChangePlaybackRate={handleChangePlaybackRate}
          />
        </div>
      </div>
    </>
  )
}
