<h1 align="center">ion-celebration</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/saqib92/ion-celebration#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/saqib92/ion-celebration/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/saqib92/ion-celebration/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## ✅ Prerequisites <a name = "prerequisites"></a>

The current version of the library is compatible with Ionic 6+.

## ⬇️ Install <a name = "install"></a>

Using npm

```sh
npm install ion-celebration --save
```

Using yarn

```sh
yarn add ion-celebration
```

## 🛠 Setup <a name = "setup"></a>

Once installed you need to import our module in the parent module for the component you will be using it in:

```js
import { IonCelebrationModule } from 'ion-celebration';

@NgModule({
  ...
  imports: [IonCelebrationModule, ...],
  ...
})
export class YourModule {
}
```

## Usage <a name = "usage"></a>

Include the component on page template, like the example below:

```
  <ion-celebration
   [name]="'balloon'"
   [time]="10000">
   </ion-celebration>
```

### API

### Properties

- name: `string` any valid ion-icon name.
- time: `number` time in miliseconds to show animation. default `5000`.

## Author <a name = "author"></a>

👤 **Najam Us Saqib**

- Github: [@saqib92](https://github.com/saqib92)

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](https://github.com/saqib92/ion-celebration/issues).

## Show your support <a name = "support"></a>

Give a ⭐️ if this project helped you!

## 📝 License <a name = "license"></a>

Copyright © 2022 [Saqb92](https://github.com/saqib92).<br />
This project is [MIT](https://github.com/saqib92/ion-celebrations/blob/master/LICENSE) licensed.
