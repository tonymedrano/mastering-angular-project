{application,chttpd,
             [{description,"HTTP interface for CouchDB cluster"},
              {vsn,"2.2.0"},
              {modules,[chttpd,chttpd_app,chttpd_auth,chttpd_auth_cache,
                        chttpd_auth_request,chttpd_cors,chttpd_db,chttpd_epi,
                        chttpd_external,chttpd_handlers,chttpd_httpd_handlers,
                        chttpd_misc,chttpd_plugin,chttpd_prefer_header,
                        chttpd_rewrite,chttpd_show,chttpd_sup,
                        chttpd_test_util,chttpd_view,chttpd_xframe_options]},
              {registered,[chttpd_sup,chttpd,chttpd_auth_cache,
                           chttpd_auth_cache_lru]},
              {applications,[kernel,stdlib,couch_log,couch_stats,config,couch,
                             ets_lru,fabric]},
              {mod,{chttpd_app,[]}}]}.