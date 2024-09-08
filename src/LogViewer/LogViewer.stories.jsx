import LogViewer from './LogViewer';

export default {
    title: 'Patterns/ContentViewer/LogViewer',
    component: LogViewer,
};

const Template = (args) => <LogViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
    logs: `2024-01-01 10:00:00 INFO - Application started
2024-01-01 10:01:00 ERROR - Missing configuration file
2024-01-01 10:02:00 DEBUG - Retrying connection...`,
};

export const LongLog = Template.bind({});
LongLog.args = {
    logs: `
    2024-01-01 10:00:00 INFO - Starting log...\n
    2024-01-01 10:01:00 INFO - Continuing process...\n
    2024-01-01 10:02:00 WARN - High memory usage detected...\n
    2024-01-01 10:03:00 ERROR - Connection lost!\n
    2024-01-01 10:04:00 INFO - Restarting...\n
    2024-01-01 10:05:00 SUCCESS - Reconnected successfully.\n
    `,
};
