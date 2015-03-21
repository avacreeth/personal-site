require 'rubygems'
require 'jekyll'

desc "Generate static files"
task :build do
    Jekyll::Site.new(Jekyll.configuration({
        "source"      => ".",
        "destination" => "_site"
    })).process
end

desc "Deploy to github pages"
task :deploy => [:build] do
    Dir.mktmpdir do |tmp|
        Dir.chdir tmp do
            system "git clone git@github.com:andycreeth/andycreeth.github.io.git ."
            system "rm -rf *"
        end

        system "mv _site/* #{tmp}"

        Dir.chdir tmp do
            system "git add -A"
            message = "Site deploy #{Time.now.utc}"
            system "git commit -m #{message.shellescape}"
            system "git push origin master"
        end
    end
end
