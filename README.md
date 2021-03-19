# Available Task Queues Plugin

## What Does This Plugin Do?

sadfsdf

## Disclaimer

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

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

---

## Setup

See versions in the _disclaimer section_ above to ensure you have the necessary code libraries and tools installed on your local environment

### 1. Clone this code repo

[Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this code repository to your local environment.

### 2. npm install dependencies

Once downloaded to your local environment CD into the root of the code and run `npm install` to install dependencies.

### 3. Make sure you have installed the Twilio CLI and Flex CLI Plugin extension

## How to Run This Code Locally

Using the Twilio CLI make sure you have CD'd into the root of this code directory. Start the code by running the following:

```bash
twilio flex:plugins:start
```

This should open a new browser tab and ask you to log into your Twilio Flex account.

To stop running this plugin press `control c` on your keyboard to stop the local web server.

## How to Deploy This Plugin to Twilio

This plugin can be deployed using the Twilio CLI. This process can be a two step process that includes 1. deploying the code and 2. releasing the code. This can be accomplished entirely through the CLI or through a combination of the CLI and the Flex admin panel. For full instructions on deploying this plugin, please see our documentation here.

- [Deploy and release using the Flex Plugins CLI](https://www.twilio.com/docs/flex/developer/plugins/cli/deploy-and-release)
- [Common Use Cases](https://www.twilio.com/docs/flex/developer/plugins/cli/common-uses)
- [Plugins CLI Reference](https://www.twilio.com/docs/flex/developer/plugins/cli/reference)

---

## Development

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.
