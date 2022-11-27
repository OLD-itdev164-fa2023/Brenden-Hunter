import React from 'react'
import mainHeaderImage from './images/Assets/react.png'
import { Search } from 'styled-components/feather'

const images = {
    mainHeaderImage
}

const icons = {
    Search: <Search />
}

const theme = {
    header: { backgroundColor: '#555' }
}

export const Gray = { ...theme, variants, images, icons }