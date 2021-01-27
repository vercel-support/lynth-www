import React, {Component} from 'react'
import Image from "next/image"
import Link from 'next/link'

class Breadcrumbs extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="h-96 max-h-96 relative">
          <Image
            src="/images/background.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />

          <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-screen">
            <p className="text-white text-4xl">
              We can't find that
            </p>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Breadcrumbs;
