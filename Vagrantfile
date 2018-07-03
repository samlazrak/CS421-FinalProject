Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 27017, host: 27017
  config.vm.network :forwarded_port, guest: 4200, host: 4200

  config.vm.provision :shell, path: "vagrant-bootstrap.sh"

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
  end
end