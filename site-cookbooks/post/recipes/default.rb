# Create theme directory symbolic link
theme_dir = "#{node["wordpress"]["dir"]}/wp-content/themes/#{node["wordpress"]["db"]["name"]}";

execute "create_theme_directory" do
    command "mkdir /vagrant/theme && ln -s ../../../theme #{theme_dir}"
    not_if { ::File.exists?("/vagrant/theme")}
end

execute "create_theme_directory_symbolic_link" do
    command "ln -s ../../../theme #{theme_dir}"
    not_if { ::File.exists?(theme_dir)}
end

