const request = require('request');

module.exports = {
    defaultConfig: {
        enabled: true
    },
    pluginName: 'Swarg Logger',
    pluginDescription: 'Transfers your Guild War data to guild.mindfulinteractive.com automatically.',
    log_base_url: '[INSERT URL HERE]',
    log_url: '/battles',
    log_matchup_url: '/log-matchup',
    log_member_url: '/members',
    log_lab_url: '/labs',
    log_lab_record: '/labattacks',
    log_lab_members: '/labmembers',
    log_guild_battle_defenses: '/log-guild-defenses',
    init(proxy, config) {
        proxy.on('GetGuildWarMatchupInfo', (req, resp) => {
            if (config.Config.Plugins[this.pluginName].enabled) {
                this.logMatchUp(proxy, req, resp);
            }
        });
        proxy.on('GetGuildWarBattleLogByGuildId', (req, resp) => {
            if (config.Config.Plugins[this.pluginName].enabled) {
                this.logGuildAttack(proxy, req, resp);
            }
        });
        proxy.on('GetGuildWarParticipationInfo', (req, resp) => {
            if (config.Config.Plugins[this.pluginName].enabled) {
                this.logMembers(proxy, req, resp);
            }
        });
        proxy.on('GetGuildMazeBattleLogByWizard', (req, resp) => {
            if (config.Config.Plugins[this.pluginName].enabled) {
                this.logLabRecord(proxy, req, resp);
            }
        });
        proxy.on('GetGuildMazeMemberInfoList', (req, resp) => {
            if (config.Config.Plugins[this.pluginName].enabled) {
                this.logLabMembers(proxy, req, resp);
            }
        });
        proxy.on('GetGuildWarDefenseUnits', (req, resp) => {
            if (config.Config.Plugins[this.pluginName].enabled) {
                this.logGuildBattleDefenses(proxy, req, resp);
            }
        });
    },

    logGuildAttack(proxy, req, resp) {
        const { command } = req;

        let options = {
            method: 'post',
            uri: this.log_base_url + this.log_url,
            json: true,
            body: resp
        };

        request(options, (error, response) => {
            if (error) {
                proxy.log({ type: 'error', source: 'plugin', name: this.pluginName, message: `Error: ${error.message}` });
                return;
            }

            if (response.statusCode === 200) {
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
            } else {
                proxy.log({
                    type: 'error',
                    source: 'plugin',
                    name: this.pluginName,
                    message: `${command} failed: Server responded with code: ${response.statusCode}`
                });
            }
        });
    },

    logMembers(proxy, req, resp) {
        const { command } = req;

        let options = {
            method: 'post',
            uri: this.log_base_url + this.log_member_url,
            json: true,
            body: resp
        };

        request(options, (error, response) => {
            if (error) {
                proxy.log({ type: 'error', source: 'plugin', name: this.pluginName, message: `Error: ${error.message}` });
                return;
            }

            if (response.statusCode === 200) {
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
                return '<p>Woo hoo</p>';
            } else {
                proxy.log({
                    type: 'error',
                    source: 'plugin',
                    name: this.pluginName,
                    message: `${command} failed: Server responded with code: ${response.statusCode}`
                });
            }
        });
    },

    logLabRecord(proxy, req, resp) {
        const { command } = req;

        let options = {
            method: 'post',
            uri: this.log_base_url + this.log_lab_record,
            json: true,
            body: resp
        };

        request(options, (error, response) => {
            if (error) {
                proxy.log({ type: 'error', source: 'plugin', name: this.pluginName, message: `Error: ${error.message}` });
                return;
            }

            if (response.statusCode === 200) {
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
                return '<p>Woo hoo</p>';
            } else {
                proxy.log({
                    type: 'error',
                    source: 'plugin',
                    name: this.pluginName,
                    message: `${command} failed: Server responded with code: ${response.statusCode}`
                });
            }
        });
    },

    logLab(proxy, req, resp) {
        const { command } = req;

        let options = {
            method: 'post',
            uri: this.log_base_url + this.log_lab_url,
            json: true,
            body: resp
        };

        request(options, (error, response) => {
            if (error) {
                proxy.log({ type: 'error', source: 'plugin', name: this.pluginName, message: `Error: ${error.message}` });
                return;
            }

            if (response.statusCode === 200) {
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
                return '<p>Woo hoo</p>';
            } else {
                proxy.log({
                    type: 'error',
                    source: 'plugin',
                    name: this.pluginName,
                    message: `${command} failed: Server responded with code: ${response.statusCode}`
                });
            }
        });
    },

    logLabMembers(proxy, req, resp) {
        const { command } = req;

        let options = {
            method: 'post',
            uri: this.log_base_url + this.log_lab_members,
            json: true,
            body: resp
        };

        request(options, (error, response) => {
            if (error) {
                proxy.log({ type: 'error', source: 'plugin', name: this.pluginName, message: `Error: ${error.message}` });
                return;
            }

            if (response.statusCode === 200) {
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
                return '<p>Woo hoo</p>';
            } else {
                proxy.log({
                    type: 'error',
                    source: 'plugin',
                    name: this.pluginName,
                    message: `${command} failed: Server responded with code: ${response.statusCode}`
                });
            }
        });
    },

    logGuildBattleDefenses(proxy, req, resp) {
        const { command } = req;

        let options = {
            method: 'post',
            uri: this.log_base_url + this.log_guild_battle_defenses,
            json: true,
            body: resp
        };

        request(options, (error, response) => {
            if (error) {
                proxy.log({ type: 'error', source: 'plugin', name: this.pluginName, message: `Error: ${error.message}` });
                return;
            }

            if (response.statusCode === 200) {
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
                return '<p>Woo hoo</p>';
            } else {
                proxy.log({
                    type: 'error',
                    source: 'plugin',
                    name: this.pluginName,
                    message: `${command} failed: Server responded with code: ${response.statusCode}`
                });
            }
        });
    },

    logMatchUp(proxy, req, resp) {
        const { command } = req;

        let options = {
            method: 'post',
            uri: this.log_base_url + this.log_matchup_url,
            json: true,
            body: resp
        };

        request(options, (error, response) => {
            if (error) {
                proxy.log({ type: 'error', source: 'plugin', name: this.pluginName, message: `Error: ${error.message}` });
                return;
            }

            if (response.statusCode === 200) {
                proxy.log({ type: 'success', source: 'plugin', name: this.pluginName, message: `${command} logged successfully` });
                return '<p>Woo hoo</p>';
            } else {
                proxy.log({
                    type: 'error',
                    source: 'plugin',
                    name: this.pluginName,
                    message: `${command} failed: Server responded with code: ${response.statusCode}`
                });
            }
        });
    }
};
