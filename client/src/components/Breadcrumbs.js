import React from 'react';
import {
    Breadcrumbs as MUIBreadcrumbs,
    Link,
    Typography,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Breadcrumbs = (props) => {
    const {
        history,
        location: { pathname },
    } = props;
    const pathnames = pathname.split('/').filter((x) => x);
    return (
        <div>
            {pathname === '/' ? (
                ''
            ) : (
                <MUIBreadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    className="flex  items-center items-start px-4 md:px-52 h-24"
                >
                    {pathnames.length > 0 ? (
                        <Link onClick={() => history.push('/')}>Home</Link>
                    ) : (
                        <Typography> Home </Typography>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames
                            .slice(0, index + 1)
                            .join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <Typography key={name}>{name}</Typography>
                        ) : (
                            <Link
                                key={name}
                                onClick={() => history.push(routeTo)}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </MUIBreadcrumbs>
            )}
        </div>
    );
};

export default withRouter(Breadcrumbs);
