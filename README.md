# Available Task Queues Plugin

> ## Disclaimer
>
> This software is to be considered "sample code", a Type B Deliverable, and is delivered "as-is" to the user. Twilio bears no responsibility to support the use or implementation of this software.
>
> ### Plugin Code Developed and Tested On the Following Versions
>
> > _Code may not run as expected on higher versions._
>
> - _Twilio Flex UI: 1.25.2_
> - _Twilio CLI: 2.19.0_
> - _Twilio CLI Flex Plugin: 4.5.0-beta.0_
> - _Node: 12.21.0_
> - _nvm: 7.6.3_

---

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

See version in the disclaimer above to ensure you have the necessary code libraries and tools installed on your local environment

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this code repository to your local environment.
2. Once downloaded to your local environment CD into the root of the code and run `npm install` to install dependencies.
3.

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

```bash
cd

# If you use npm
npm install
```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex@beta
```

## Development

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.
