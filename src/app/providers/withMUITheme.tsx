import { MuiTheme } from 'shared';

export default function withMUITheme<P extends JSX.IntrinsicAttributes>(
    Component: React.ComponentType<P>,
) {
    return function WithMUITheme(props: P): JSX.Element {
        return (
            <MuiTheme>
                <Component {...props} />
            </MuiTheme>
        );
    };
}
