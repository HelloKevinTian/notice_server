var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var redis = require("redis"),
client = redis.createClient();
var session_config = require('./config/session');

var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var logout = require('./routes/logout');
var config = require('./routes/config');
var config2 = require('./routes/config2');
var save = require('./routes/save');
var reward_vs_weekly = require('./routes/reward_vs_weekly');
var reward_vs_weekly_230 = require('./routes/reward_vs_weekly_230');
var reward_vs_weekly_240 = require('./routes/reward_vs_weekly_240');
var reward_vs_weekly_wanwan_110 = require('./routes/reward_vs_weekly_wanwan_110');
var announcement_090 = require('./routes/announcement_090');
var announcement_100 = require('./routes/announcement_100');
var announcement_102 = require('./routes/announcement_102');
var announcement_103 = require('./routes/announcement_103');
var announcement_200 = require('./routes/announcement_200');
var announcement_gv_100 = require('./routes/announcement_gv_100');
var announcement_200_000066 = require('./routes/announcement_200_000066');
var announcement_200_000005 = require('./routes/announcement_200_000005');
var announcement_200_000020 = require('./routes/announcement_200_000020');
var announcement_200_000023 = require('./routes/announcement_200_000023');
var announcement_200_000054 = require('./routes/announcement_200_000054');
var announcement_200_000108 = require('./routes/announcement_200_000108');
var announcement_200_000440 = require('./routes/announcement_200_000440');
var announcement_200_000491 = require('./routes/announcement_200_000491');
var announcement_200_000582 = require('./routes/announcement_200_000582');
var announcement_200_000800 = require('./routes/announcement_200_000800');

var announcement_210 = require('./routes/announcement_210');
var announcement_210_000066 = require('./routes/announcement_210_000066');
var announcement_210_000005 = require('./routes/announcement_210_000005');
var announcement_210_000020 = require('./routes/announcement_210_000020');
var announcement_210_000023 = require('./routes/announcement_210_000023');
var announcement_210_000054 = require('./routes/announcement_210_000054');
var announcement_210_000108 = require('./routes/announcement_210_000108');
var announcement_210_000440 = require('./routes/announcement_210_000440');
var announcement_210_000491 = require('./routes/announcement_210_000491');
var announcement_210_000582 = require('./routes/announcement_210_000582');
var announcement_210_000800 = require('./routes/announcement_210_000800');

var announcement_220 = require('./routes/announcement_220');
var announcement_220_000961 = require('./routes/announcement_220_000961');
var announcement_220_000442 = require('./routes/announcement_220_000442');

var announcement_230 = require('./routes/announcement_230');
var announcement_230_000013 = require('./routes/announcement_230_000013');
var announcement_230_000023 = require('./routes/announcement_230_000023');

var announcement_240 = require('./routes/announcement_240');
var announcement_240_000020 = require('./routes/announcement_240_000020');
var announcement_240_000066 = require('./routes/announcement_240_000066');
var announcement_240_000078 = require('./routes/announcement_240_000078');
var announcement_240_000023 = require('./routes/announcement_240_000023');
var announcement_240_000054 = require('./routes/announcement_240_000054');

var announcement_250 = require('./routes/announcement_250');
var announcement_250_000066 = require('./routes/announcement_250_000066');
var announcement_250_000078 = require('./routes/announcement_250_000078');
var announcement_250_000023 = require('./routes/announcement_250_000023');
var announcement_250_000054 = require('./routes/announcement_250_000054');

var announcement_260 = require('./routes/announcement_260');
var announcement_260_000066 = require('./routes/announcement_260_000066');
var announcement_260_000023 = require('./routes/announcement_260_000023');
var announcement_260_000054 = require('./routes/announcement_260_000054');
var announcement_260_111245 = require('./routes/announcement_260_111245');
var announcement_260_111264 = require('./routes/announcement_260_111264');

var announcement_270 = require('./routes/announcement_270');
var announcement_270_111264 = require('./routes/announcement_270_111264');

var rewardlist_seoul_200 = require('./routes/rewardlist_seoul_200');
var rewardlist_seoul_200_000005 = require('./routes/rewardlist_seoul_200_000005');
var rewardlist_seoul_200_000020 = require('./routes/rewardlist_seoul_200_000020');
var rewardlist_seoul_200_000023 = require('./routes/rewardlist_seoul_200_000023');
var rewardlist_seoul_200_000054 = require('./routes/rewardlist_seoul_200_000054');
var rewardlist_seoul_200_000108 = require('./routes/rewardlist_seoul_200_000108');
var rewardlist_seoul_200_000440 = require('./routes/rewardlist_seoul_200_000440');
var rewardlist_seoul_200_000491 = require('./routes/rewardlist_seoul_200_000491');
var rewardlist_seoul_200_000582 = require('./routes/rewardlist_seoul_200_000582');
var rewardlist_seoul_200_000800 = require('./routes/rewardlist_seoul_200_000800');

var rewardlist_seoul_210 = require('./routes/rewardlist_seoul_210');
var rewardlist_seoul_210_000005 = require('./routes/rewardlist_seoul_210_000005');
var rewardlist_seoul_210_000020 = require('./routes/rewardlist_seoul_210_000020');
var rewardlist_seoul_210_000023 = require('./routes/rewardlist_seoul_210_000023');
var rewardlist_seoul_210_000054 = require('./routes/rewardlist_seoul_210_000054');
var rewardlist_seoul_210_000108 = require('./routes/rewardlist_seoul_210_000108');
var rewardlist_seoul_210_000440 = require('./routes/rewardlist_seoul_210_000440');
var rewardlist_seoul_210_000491 = require('./routes/rewardlist_seoul_210_000491');
var rewardlist_seoul_210_000582 = require('./routes/rewardlist_seoul_210_000582');
var rewardlist_seoul_210_000800 = require('./routes/rewardlist_seoul_210_000800');

var rewardlist_seoul_220 = require('./routes/rewardlist_seoul_220');
var rewardlist_seoul_220_000961 = require('./routes/rewardlist_seoul_220_000961');
var rewardlist_seoul_220_000442 = require('./routes/rewardlist_seoul_220_000442');

var rewardlist_seoul_230 = require('./routes/rewardlist_seoul_230');
var index_mm = require('./routes/index_mm');

//小包公告
var announcement_rmlite_110 = require('./routes/announcement_rmlite_110');
var announcement_rmlite_110_111225 = require('./routes/announcement_rmlite_110_111225');
var announcement_rmlite_120 = require('./routes/announcement_rmlite_120');
var announcement_rmlite_120_111225 = require('./routes/announcement_rmlite_120_111225');
var announcement_rmlite_120_111263 = require('./routes/announcement_rmlite_120_111263');
var announcement_rmlite_120_000066 = require('./routes/announcement_rmlite_120_000066');
var announcement_rmlite_120_000016 = require('./routes/announcement_rmlite_120_000016');
var announcement_rmlite_120_000000 = require('./routes/announcement_rmlite_120_000000');

var announcement_rmlite_130 = require('./routes/announcement_rmlite_130');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var options = {
    "client":client,
    "host":session_config.options.host,
    "port":session_config.options.port,
    "ttl":session_config.options.ttl,
    "db":session_config.options.db
};
app.use(session({ store: new RedisStore(options), secret: 'keyboard cat' }));

app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('/config', config);
app.use('/config2', config2);
app.use('/save', save);
app.use('/reward_vs_weekly', reward_vs_weekly);
app.use('/reward_vs_weekly_230', reward_vs_weekly_230);
app.use('/reward_vs_weekly_240', reward_vs_weekly_240);
app.use('/reward_vs_weekly_wanwan_110', reward_vs_weekly_wanwan_110);
app.use('/announcement_090', announcement_090);
app.use('/announcement_100', announcement_100);
app.use('/announcement_102', announcement_102);
app.use('/announcement_103', announcement_103);
app.use('/announcement_200', announcement_200);
app.use('/announcement_gv_100', announcement_gv_100);
app.use('/announcement_200_000066', announcement_200_000066);
app.use('/announcement_200_000005', announcement_200_000005);
app.use('/announcement_200_000020', announcement_200_000020);
app.use('/announcement_200_000023', announcement_200_000023);
app.use('/announcement_200_000054', announcement_200_000054);
app.use('/announcement_200_000108', announcement_200_000108);
app.use('/announcement_200_000440', announcement_200_000440);
app.use('/announcement_200_000491', announcement_200_000491);
app.use('/announcement_200_000582', announcement_200_000582);
app.use('/announcement_200_000800', announcement_200_000800);

app.use('/announcement_210', announcement_210);
app.use('/announcement_210_000066', announcement_210_000066);
app.use('/announcement_210_000005', announcement_210_000005);
app.use('/announcement_210_000020', announcement_210_000020);
app.use('/announcement_210_000023', announcement_210_000023);
app.use('/announcement_210_000054', announcement_210_000054);
app.use('/announcement_210_000108', announcement_210_000108);
app.use('/announcement_210_000440', announcement_210_000440);
app.use('/announcement_210_000491', announcement_210_000491);
app.use('/announcement_210_000582', announcement_210_000582);
app.use('/announcement_210_000800', announcement_210_000800);

app.use('/announcement_220', announcement_220);
app.use('/announcement_220_000961', announcement_220_000961);
app.use('/announcement_220_000442', announcement_220_000442);

app.use('/announcement_230', announcement_230);
app.use('/announcement_230_000013', announcement_230_000013);
app.use('/announcement_230_000023', announcement_230_000023);

app.use('/announcement_240', announcement_240);
app.use('/announcement_240_000020', announcement_240_000020);
app.use('/announcement_240_000066', announcement_240_000066);
app.use('/announcement_240_000078', announcement_240_000078);
app.use('/announcement_240_000023', announcement_240_000023);
app.use('/announcement_240_000054', announcement_240_000054);

app.use('/announcement_250', announcement_250);
app.use('/announcement_250_000066', announcement_250_000066);
app.use('/announcement_250_000078', announcement_250_000078);
app.use('/announcement_250_000023', announcement_250_000023);
app.use('/announcement_250_000054', announcement_250_000054);

app.use('/announcement_260', announcement_260);
app.use('/announcement_260_000066', announcement_260_000066);
app.use('/announcement_260_000023', announcement_260_000023);
app.use('/announcement_260_000054', announcement_260_000054);
app.use('/announcement_260_111245', announcement_260_111245);
app.use('/announcement_260_111264', announcement_260_111264);

app.use('/announcement_270', announcement_270);
app.use('/announcement_270_111264', announcement_270_111264);

app.use('/rewardlist_seoul_200', rewardlist_seoul_200);
app.use('/rewardlist_seoul_200_000005', rewardlist_seoul_200_000005);
app.use('/rewardlist_seoul_200_000020', rewardlist_seoul_200_000020);
app.use('/rewardlist_seoul_200_000023', rewardlist_seoul_200_000023);
app.use('/rewardlist_seoul_200_000054', rewardlist_seoul_200_000054);
app.use('/rewardlist_seoul_200_000108', rewardlist_seoul_200_000108);
app.use('/rewardlist_seoul_200_000440', rewardlist_seoul_200_000440);
app.use('/rewardlist_seoul_200_000491', rewardlist_seoul_200_000491);
app.use('/rewardlist_seoul_200_000582', rewardlist_seoul_200_000582);
app.use('/rewardlist_seoul_200_000800', rewardlist_seoul_200_000800);


app.use('/rewardlist_seoul_210', rewardlist_seoul_210);
app.use('/rewardlist_seoul_210_000005', rewardlist_seoul_210_000005);
app.use('/rewardlist_seoul_210_000020', rewardlist_seoul_210_000020);
app.use('/rewardlist_seoul_210_000023', rewardlist_seoul_210_000023);
app.use('/rewardlist_seoul_210_000054', rewardlist_seoul_210_000054);
app.use('/rewardlist_seoul_210_000108', rewardlist_seoul_210_000108);
app.use('/rewardlist_seoul_210_000440', rewardlist_seoul_210_000440);
app.use('/rewardlist_seoul_210_000491', rewardlist_seoul_210_000491);
app.use('/rewardlist_seoul_210_000582', rewardlist_seoul_210_000582);
app.use('/rewardlist_seoul_210_000800', rewardlist_seoul_210_000800);

app.use('/rewardlist_seoul_220', rewardlist_seoul_220);
app.use('/rewardlist_seoul_220_000961', rewardlist_seoul_220_000961);
app.use('/rewardlist_seoul_220_000442', rewardlist_seoul_220_000442);

app.use('/rewardlist_seoul_230', rewardlist_seoul_230);
app.use('/index_mm', index_mm);

app.use('/announcement_rmlite_110', announcement_rmlite_110);
app.use('/announcement_rmlite_110_111225', announcement_rmlite_110_111225);
app.use('/announcement_rmlite_120', announcement_rmlite_120);
app.use('/announcement_rmlite_120_111225', announcement_rmlite_120_111225);
app.use('/announcement_rmlite_120_111263', announcement_rmlite_120_111263);
app.use('/announcement_rmlite_120_000066', announcement_rmlite_120_000066);
app.use('/announcement_rmlite_120_000016', announcement_rmlite_120_000016);
app.use('/announcement_rmlite_120_000000', announcement_rmlite_120_000000);

app.use('/announcement_rmlite_130', announcement_rmlite_130);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
