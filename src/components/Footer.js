import React, { Component } from 'react';
import { Button, Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


export default class components extends Component {
    render() {
        return (
            <div>
                <Container maxWidth="xl" style={{ background: "#f5000082", position: "relative", bottom: "0", justifyContent: "center", display: "flex", alignItems: "center", padding: "15px   " }}>
                    <Button
                        href="https://www.facebook.com/joao.fazendadossantos"
                        target= "_blank"
                    >
                        <FacebookIcon
                            style={{ fontSize: "35px", margin: "10px" }}
                        />
                    </Button>
                    <Button
                        href="https://www.instagram.com/fazenda.jp/"
                        target= "_blank"
                    >
                        <InstagramIcon
                            style={{ fontSize: "35px", margin: "10px" }}
                        />
                    </Button>
                </Container>
            </div>
        );
    }
}