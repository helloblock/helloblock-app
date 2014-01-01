# # HACK, so angular views can be in /assets folder and compiled
# module Sprockets
#   class Manifest

#     def compile(*args)
#       unless environment
#         raise Error, "manifest requires environment for compilation"
#       end

#       paths = environment.each_logical_path(*args).to_a +
#         args.flatten.select { |fn| Pathname.new(fn).absolute? if fn.is_a?(String)}

#       paths.each do |path|
#         if asset = find_asset(path)
#           files[asset.digest_path] = {
#             'logical_path' => asset.logical_path,
#             'mtime'        => asset.mtime.iso8601,
#             'size'         => asset.bytesize,
#             'digest'       => asset.digest
#           }
#           assets[asset.logical_path] = asset.digest_path

#           target = File.join(dir, asset.digest_path)

#           SprocketsHack.angular_assets(dir, asset, logger)

#           if File.exist?(target)
#             logger.info "Skipping: #{target}"
#           else
#             logger.info "Writing: #{target}"
#             asset.write_to target
#             asset.write_to "#{target}.gz" if asset.is_a?(BundledAsset)
#           end

#           save
#           asset
#         end
#       end

#     end

#   end
# end

# # For AngularJS Views
# module SprocketsHack
#   extend self

#   def angular_assets(dir, asset, logger)
#     undigested_target = File.join(dir, asset.logical_path)

#     if html?(asset.logical_path)
#       logger.info "AngularJS View: #{undigested_target}"
#       asset.write_to undigested_target
#       if asset.is_a?(Sprockets::BundledAsset)
#         asset.write_to "#{undigested_target}.gz"
#       end
#     end
#   end

#   def html?(path)
#     path =~ /\.html/ ? true : false
#   end

# end
