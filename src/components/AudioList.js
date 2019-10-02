import React from 'react'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import CircularProgress from '@material-ui/core/CircularProgress'
import FolderOpen from '@material-ui/icons/FolderOpen'

const SelectedAudio = ({ name }) => (
  <Typography
    variant="body1"
    className="list-selected-audio"
    style={{ textAlign: name ? 'left' : 'center' }}
  >
    {name ? name : 'No audio selected'}
  </Typography>
)

const EmptyList = ({ hasAudio }) =>
  hasAudio ? (
    <Typography variant="body1" style={{ textAlign: 'center' }}>
      <div>No audios.</div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        Click on the
        <FolderOpen style={{ margin: '0px 4px' }} />
        button and select the audios.
      </div>
    </Typography>
  ) : null

const AudioListItem = ({ audio, selectedAudio, onClickAudio }) => (
  <ListItem
    button
    disabled={!audio.audioElement}
    selected={audio.audioElement && audio.audioElement === selectedAudio.audioElement}
    onClick={() => onClickAudio(audio)}
  >
    <ListItemText primary={audio.name} />
    {!audio.audioElement && <CircularProgress size={24} className="list-progress" />}
  </ListItem>
)

export const AudioList = ({ audios, selectedAudio, onClickAudio }) => (
  <Paper className="list">
    <SelectedAudio name={selectedAudio.name} />
    <Divider variant="middle" className="list-divider" />
    <div className="list-audios">
      <List>
        <EmptyList hasAudio={audios.length === 0} />
        {audios.map((audio, index) => (
          <AudioListItem
            key={index}
            audio={audio}
            selectedAudio={selectedAudio}
            onClickAudio={onClickAudio}
          />
        ))}
      </List>
    </div>
  </Paper>
)
