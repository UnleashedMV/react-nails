export * from './Button'
export * from './Input'
import { addThemeComponent } from '../theme'

addThemeComponent((theme: { borderRadius: string, palette: { [name: string]: string }, colors: { [name: string]: string } }) => (['controls', {
    borderRadius: theme.borderRadius,
    borderColor: theme.colors.elemBorder,
    placeholderTextColor: theme.colors.textLight,
    backgroundColor: theme.palette.white,
    textColor: theme.colors.text,
    lineHeight: "1.15em",
    error: {
        borderColor: theme.colors.negative,
    },
    success: {
        borderColor: theme.colors.positive,
    },
    focus: {
        borderColor: theme.colors.primary,
    }
}]))