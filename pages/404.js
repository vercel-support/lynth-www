import React, { Component } from 'react';
import {NextSeo} from "next-seo";
import Image from "next/image";

class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <NextSeo
          title="Not found - Lynth"
          description="Lynth official website"
          openGraph={{
            url: 'https:/www.lynth.io/',
            title: 'Lynth',
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

        <div className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen">
          <p className="text-black dark:text-white text-9xl font-medium">
            404
          </p>
          <p className="text-black dark:text-white text-4xl mt-6">
            We can't find that
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Error;
