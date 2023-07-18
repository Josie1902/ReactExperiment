"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
  const handleSearch = (event) => {
    // Handle search logic here
    console.log(event.target.value);
  };

  return (
    <div>
      <TextField
        placeholder="Search..."
        size="small"
        variant="outlined"
        onChange={handleSearch}
        InputProps={{
            style: {
                height: "32px",
            },
          endAdornment: (
            <IconButton edge="end" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}
