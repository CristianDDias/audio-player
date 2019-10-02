import React from 'react'

import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Slider from '@material-ui/core/Slider'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled'
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled'
import SkipNext from '@material-ui/icons/SkipNext'
import SkipPrevious from '@material-ui/icons/SkipPrevious'
import Forward10 from '@material-ui/icons/Forward10'
import Forward30 from '@material-ui/icons/Forward30'
import Replay10 from '@material-ui/icons/Replay10'
import Replay30 from '@material-ui/icons/Replay30'

const sliderSpeed = [
  {
    value: 0.5,
    label: '0.5x'
  },
  {
    value: 0.6
  },
  {
    value: 0.7
  },
  {
    value: 0.8
  },
  {
    value: 0.9
  },
  {
    value: 1.0,
    label: '1.0x'
  },
  {
    value: 1.1
  },
  {
    value: 1.2
  },
  {
    value: 1.3
  },
  {
    value: 1.4
  },
  {
    value: 1.5,
    label: '1.5x'
  }
]

export const AudioControls = ({
  isPlaying,
  onClickPlay,
  onClickPause,
  onChangeCurrentTime,
  onChangePlaybackRate
}) => (
  <Paper className="controls">
    <div>
      <IconButton color="primary" size="small">
        <SkipPrevious className="icon-medium" />
      </IconButton>
      <IconButton color="primary" size="small" onClick={isPlaying ? onClickPause : onClickPlay}>
        {isPlaying ? (
          <PauseCircleFilled className="icon-large" />
        ) : (
          <PlayCircleFilled className="icon-large" />
        )}
      </IconButton>
      <IconButton color="primary" size="small">
        <SkipNext className="icon-medium" />
      </IconButton>
    </div>
    <div className="controls-skip-buttons">
      <IconButton size="small" onClick={() => onChangeCurrentTime(-30)}>
        <Replay30 className="icon-small" />
      </IconButton>
      <IconButton size="small" onClick={() => onChangeCurrentTime(-10)}>
        <Replay10 className="icon-small" />
      </IconButton>
      <IconButton size="small" onClick={() => onChangeCurrentTime(10)}>
        <Forward10 className="icon-small" />
      </IconButton>
      <IconButton size="small" onClick={() => onChangeCurrentTime(30)}>
        <Forward30 className="icon-small" />
      </IconButton>
    </div>
    <div className="controls-slider">
      <Slider
        defaultValue={1.0}
        valueLabelDisplay="auto"
        step={0.1}
        marks={sliderSpeed}
        min={0.5}
        max={1.5}
        onChangeCommitted={(_, value) => onChangePlaybackRate(value)}
      />
    </div>
  </Paper>
)
