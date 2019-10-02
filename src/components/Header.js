import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FolderOpen from '@material-ui/icons/FolderOpen'

export const Header = ({ onChangeFile }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" className="toolbar-title">
        C2D Player
      </Typography>
      <input
        id="icon-button-file"
        type="file"
        accept="audio/*"
        multiple
        className="icon-button-file"
        onChange={onChangeFile}
      />
      <label htmlFor="icon-button-file">
        <IconButton color="inherit" component="span">
          <FolderOpen />
        </IconButton>
      </label>
    </Toolbar>
  </AppBar>
)
