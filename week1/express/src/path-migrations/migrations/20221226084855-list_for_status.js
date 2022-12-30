module.exports = {
    async up(db, client) {
        const session = client.startSession();

        try {
            await session.withTransaction(
                async () => {
                    await db.collection('tasks')
                        .update(
                            { estimatedTime: { $gt: 10 } },
                            { $set: { status: 'Done' } },
                            {
                                upsert: false,
                                multi: true,
                            },
                        );
                    await db.collection('tasks')
                        .update(
                            { estimatedTime: { $lte: 10 } },
                            { $set: { status: 'In progress' } },
                            {
                                upsert: false,
                                multi: true,
                            },
                        );
                },
            );
        } finally {
            await session.endSession();
        }
    },

    async down(db, client) {
        const session = client.startSession();

        try {
            await session.withTransaction(
                async () => {
                    await db.collection('tasks')
                        .update(
                            {},
                            { $unset: { status: '' } },
                            {
                                upsert: false,
                                multi: true,
                            },
                        );
                },
            );
        } finally {
            await session.endSession();
        }
    },
};
