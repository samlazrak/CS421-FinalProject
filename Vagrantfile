Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network :forwarded_port, guest: 4000, host: 4000

  config.vm.provision :shell, path: "vagrant-bootstrap.sh"

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
  end
end