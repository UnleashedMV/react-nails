import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming/create'
import { themes } from '@storybook/theming'
import { NailsApp, BodyReset, addIcon, FullScreenContainer, baseTheme } from 'react-nails'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { withTheme } from 'styled-components'
import { faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faSmile } from '@fortawesome/free-regular-svg-icons'
import { withInfo } from '@storybook/addon-info'

addIcon(faTimes)
addIcon([faChevronUp, { ...faBookmark, iconName: 'bookmark-r' }, faSmile])

const ThemeWrapper = withTheme(({ theme, children, ...rest }) => (
    <NailsApp theme={theme} {...rest}>
        <BodyReset />
        <FullScreenContainer>
            {children}
        </FullScreenContainer>
    </NailsApp>
))

const withNailsApp = (storyFn) => (
    <ThemeWrapper>
        {storyFn()}
    </ThemeWrapper>
)

addDecorator(withNailsApp)
addDecorator(withInfo)

const baseNailsTheme = {
    name: "ReactNails base theme",
    controls: {
        testValue: "Test"
    }
}

const darkNailsTheme = {
    name: "ReactNails dark theme",
    colors: {
        primary: "#ff0",
        crazyColor: "#0ff",
    },
    body: {
        backgroundColor: baseTheme.palette.grey3,
    },
    controls: {
        testValue: "Test"
    }
}

const nailsThemes = [baseNailsTheme, darkNailsTheme]
addDecorator(withThemesProvider(nailsThemes))

addParameters({
    options: {
        theme: create({
            base: 'dark',
            brandTitle: 'React Nails',
            brandUrl: 'https://github.com/Auskennfuchs/react-nails'
        }),
    }
})

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
