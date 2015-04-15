# WordPress Starter Repo

This repo should be [forked](https://github.com/picnic-collective/wordpress/fork) to start a new project.


## Requirements

- Homebrew: `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Homebrew Cask: `brew install caskroom/cask/brew-cask`
- VirtualBox: `brew cask install virtualbox`
- Vagrant: `brew cask install vagrant`
- Vagrant VBGuest: `vagrant plugin install vagrant-vbguest`
- Vagrant Hosts Updater: `vagrant plugin install vagrant-hostsupdater`
- *Recommended* Git Flow: `brew install git-flow`

## Setup

- Update the `site_name` variable at the top of `Vagrantfile` to something appropriate. This will be used as the URL for the dev site with `.dev` appended.

```
site_name = "mywordpresssite"
```

- Update the `db` and `password` variables at the top of `provision.sh` to something appropriate:

```
db="my_wordpress_site"
password="supersecretpassword"
```

- Run `vagrant up` 
- Once Vagrant has finished loaded navigate to `http://mywordpresssite.dev` (assuming `mywordpresssite` was set as the `site_name` in the `Vagrantfile`)
- Enter in the database name and password from the top of `provision.sh`
