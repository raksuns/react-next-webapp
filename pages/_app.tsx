import React from "react";
import { RecoilRoot } from 'recoil';
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import '../styles/globals.scss';
import theme from '../components/theme';

export default function App({Component, pageProps}) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </RecoilRoot>
    );
}
