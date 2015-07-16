# WordPress Starter Repo

This repo should be [forked](https://github.com/picnic-collective/wordpress/fork) to start a new project.


## Requirements

### **Recommended** Homebrew
Easily install command line applications without needing to use `sudo` for everything
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### **Recommended** Homebrew Cask:
Easily install Mac apps from the command line
```
brew install caskroom/cask/brew-cask
```

### **Recommended** Ruby:
The Mac version of Ruby requires `sudo` to install Gems. Installing the Homebrew version avoid this issue.
```
brew install ruby
```

### Chef Development Kit
Required to install Chef dependencies
```
brew cask install chefdk
```
Available [here](https://downloads.chef.io/chef-dk/) for non-Homebrewers

### VirtualBox:
VirtualBox runs the virtual machines for Vagrant
```
brew cask install virtualbox
```

### Vagrant:
Vagrant deals with setting up and provisioning virtual machines
```
brew cask install vagrant
```

### Vagrant VBGuest:
Keeps the VirtualBox Guest Additions plugin up to date automatically
```
vagrant plugin install vagrant-vbguest
```

### Vagrant Hosts Updater:
Updates your `HOSTS` file with the relevant IP/hostname config
```
vagrant plugin install vagrant-hostsupdater
```

### Vagrant Berksfile
Installs necessary Chef cookbooks automatically.
```
vagrant plugin install vagrant-berkshelf
```

### Bundler:
Installs Ruby Gems from a `Gemfile`
```
gem install bundler
```

### Node/NPM
Install Node modules from a `package.json`
```
brew install node
```

### Grunt:
Handles watch/build scripts
```
npm install -g grunt-cli
```

## Setup

- Clone the repo using `git clone git@github.com:picnic-collective/wordpress.git`
- Update the configuration values in `config.json`:
    - `site_name`: This will be used as database name and username as well as the URL for the dev site (with `.dev` appended).
    - `db.user`: The database username (same as site_name is recommended)
    - `db.name`: The database name (same as site_name is recommended)
    - `db.pass`: The database password
- Run `bundle install`
- Run `npm install`
- Run `vagrant up`
- Once Vagrant has finished loaded navigate to `http://<site_name>.dev`
