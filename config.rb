require 'uglifier'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

proxy "/index.html", "/templates/index.html", ignore: true

all_articles = data.articles

all_articles.article.each do |article|
  proxy "/articoli/#{article.slug}.html", "/templates/detail.html", ignore: true, locals: { article: article }
end


# Localization
# activate :i18n

# Slim
Slim::Engine.set_options format: :html
Slim::Engine.set_options pretty: false

set :relative_links, true

# Assets
set :css_dir, 'dist/stylesheets'
set :js_dir, 'dist/javascripts'
set :images_dir, 'dist/images'

# External pipeline
activate :external_pipeline,
  name: :gulp,
  command: build? ? 'gulp build --production' : './node_modules/gulp/bin/gulp.js',
  source: "dist",
  latency: 1

# Build-specific configuration
configure :build do
  ignore 'assets/*'
  activate :gzip
  activate :minify_html, remove_intertag_spaces: true
  activate :asset_hash
  activate :relative_assets
end

TRANSFORMS = [
  ['à', '&agrave;'],
  ['è', '&egrave;'],
  ['ù', '&ugrave;'],
  ['ò', '&ograve;'],
  ['ì', '&igrave;'],
  ['À', '&Agrave;'],
  ['È', '&Egrave;'],
  ['Ù', '&Ugrave;'],
  ['Ò', '&Ograve;'],
  ['Ì', '&Igrave;'],
  ['°', '&deg;'],
  ['«', '&laquo;'],
  ['»', '&raquo;'],
  ['É', '&Eacute;'],
  ['é', '&eacute;']
]

#helpers
helpers do
  def markdown(text)
    Tilt['markdown'].new { text }.render(scope=self)
  end
  def entity(text)
    TRANSFORMS.each.with_object(text) { |(from, to), t| t = t.gsub!(from, to) }
  end
end
