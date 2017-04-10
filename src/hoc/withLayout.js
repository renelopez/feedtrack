import React from 'react';


export const withLayout = Wrapped => props => {
    return (
        <div styleName="wrapper">
            <div styleName="header">
                <nav styleName="navbar navbar-default">
                    <div styleName="container-fluid">
                        <div styleName="navbar-header">
                            <button type="button" styleName="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span styleName="sr-only">Toggle navigation</span>
                                <span styleName="icon-bar"></span>
                                <span styleName="icon-bar"></span>
                                <span styleName="icon-bar"></span>
                            </button>
                            <a styleName="navbar-brand" href="#">Brand</a>
                        </div>

                        <div styleName="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul styleName="nav navbar-nav">
                                <li styleName="active"><a href="#">Link <span styleName="sr-only">(current)</span></a></li>
                                <li><a href="#">Link</a></li>
                                <li styleName="dropdown">
                                    <a href="#" styleName="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span styleName="caret"></span></a>
                                    <ul styleName="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" styleName="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                        <li role="separator" styleName="divider"></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form styleName="navbar-form navbar-left">
                                <div styleName="form-group">
                                    <input type="text" styleName="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" styleName="btn btn-default">Submit</button>
                            </form>
                            <ul styleName="nav navbar-nav navbar-right">
                                <li><a href="#">Link</a></li>
                                <li styleName="dropdown">
                                    <a href="#" styleName="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span styleName="caret"></span></a>
                                    <ul styleName="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" styleName="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div styleName="content">
                <Wrapped {...props} />
            </div>
            <div styleName="footer"></div>
        </div>
    )
};

export default withLayout;