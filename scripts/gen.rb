require 'mustache'

module Gen
  extend self

  def ruby(opts)
    template = File.open("scripts/_ruby.html").read
    content = {
      req_lang: "ruby",
      res_lang: "ruby",
      definition: "# COMING SOON",
      example: opts[:example],
      response: "# COMING SOON"
    }
    rendered = Mustache.render(template, content)
    p rendered
    file = File.open(opts[:file], "w+")
    file.write(rendered)
    file.close
  end

  def list
    files = Dir["public/templates/docs/ref/**/*_ruby.html"].map do |file|
      html = File.open(file).read
      match = html.match(/<code>(.+)<\/code>/)
      if match
        {
          file: file,
          example: match[1]
        }
      end
    end

    files.compact
  end

end

collection = Gen.list
collection.each do |opts|
  Gen.ruby(opts)
end
