# Portfolio for School of Code interviews

To showcase my projects, I am building a portfolio that links to all the projects I have made during the Bootcamp. 

I intend to build it with React and use Tailwind for Styling.

Installed Twitter Widget
- npm install --save react-twitter-widgets
```
import { Timeline } from 'react-twitter-widgets'

<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    height: '400'
  }}
/>
```