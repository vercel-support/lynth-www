import React, { Component } from 'react';
import {NextSeo} from "next-seo";
import Image from "next/image";

class PrivacyPolicy extends Component {
  render() {
    return (
      <React.Fragment>

        <NextSeo
          title="Privacy Policy - Lynth"
          description="Lynth official website"
          openGraph={{
            url: 'https:/www.lynth.io/',
            title: 'Privacy Policy - Lynth',
            description: 'Lynth official website',
            images: [
              {
                url: 'images/og_img.jpg',
                width: 1200,
                height: 627,
                alt: 'Lynth official website',
              }
            ],
            site_name: 'Lynth',
          }}
        />

        <Image
          src="/images/background.jpg"
          layout="fill"
        />

      </React.Fragment>
    );
  }
}

export default PrivacyPolicy;
