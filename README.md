# WordPress Starter Repo

This repo should be [forked](https://github.com/picnic-collective/wordpress/fork) to start a new project.


## Requirements

- **Recommended** Homebrew:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- **Recommended** Homebrew Cask:
```
brew install caskroom/cask/brew-cask
```

- VirtualBox:
```
brew cask install virtualbox
```

- Vagrant:
```
brew cask install vagrant
```

- Vagrant VBGuest:
```
vagrant plugin install vagrant-vbguest
```

- Vagrant Hosts Updater:
```
vagrant plugin install vagrant-hostsupdater
```

- Bundler:
```
gem install bundler
```

- Node/NPM
```
brew install node
```

- Grunt:
```
npm install -g grunt-cli
```

- **Recommended** Git Flow:
```
brew install git-flow
```

## Setup

- Update the configuration values in `config.json`:
    - `site_name`: This will be used as database name and username as well as the URL for the dev site (with `.dev` appended).
    - `db.user`: The database username (same as site_name is recommended)
    - `db.name`: The database name (same as site_name is recommended)
    - `db.pass`: The database password
- Run `bundle install`
- Run `npm install`
- Run `librarian-chef install`
- Run `vagrant up`
- Once Vagrant has finished loaded navigate to `http://<site_name>.dev`
