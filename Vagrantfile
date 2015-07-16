# Set the site name
require "json"
vagrant_dir = File.dirname(__FILE__);
config_file = JSON.parse(File.read("#{vagrant_dir}/config.json"))
site_name = config_file["site_name"]

Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.box_version = "14.04"

    # Setup the dev domain name
    config.vm.network "private_network", ip: "172.31.254.254"
    config.vm.hostname = "#{site_name}.dev"
    config.hostsupdater.aliases = ["www.#{site_name}.dev"]

    # Setup the server root
    config.vm.synced_folder "./", "/var/www"

    # Use Berksfile
    config.berkshelf.enabled = true

    # Provisioning
    config.vm.provision :chef_solo do |chef|
        # Add recipes
        chef.add_recipe "recipe[apt]" # Update apt-get
        chef.add_recipe "recipe[locale]" # Set locale
        chef.add_recipe "recipe[wordpress::nginx]" # Install WordPress with Nginx
        chef.add_recipe "recipe[post]" # Post setup

        # Recipe settings
        chef.json = {
            "locale" => {
                "lang" => "en_GB.utf8"
            },
            "wordpress" => {
                "version" => config_file["wordpress"]["version"], # Use latest version of WordPress
                "dir" => "/var/www/public", # Install to /var/www/public
                "install" => {
                    "user" => "vagrant",
                    "group" => "vagrant"
                },
                "db" => {
                    "root_password" => "root",
                    "name" => config_file["db"]["name"],
                    "user" => config_file["db"]["user"],
                    "pass" => config_file["db"]["pass"]
                },
                "server_name" => "#{site_name}.dev",
                "server_aliases" => ["www.#{site_name}.dev"]
            }
        }
    end

    # Configure VirtualBox
    config.vm.provider :virtualbox do |virtualbox|
        virtualbox.name = site_name
        virtualbox.memory = 512
        virtualbox.cpus = 1
        virtualbox.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    end
end
