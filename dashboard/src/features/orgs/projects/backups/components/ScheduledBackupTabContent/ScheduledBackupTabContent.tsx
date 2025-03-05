import { Text } from '@/components/ui/v2/Text';
import { TabsContent } from '@/components/ui/v3/tabs';
import BackupList from './BackupList';

function ScheduledBackupTabContent() {
  return (
    <TabsContent value="scheduledBackups">
      <div className="mt-6 grid w-full grid-flow-row gap-6">
        <div>
          <Text variant="h3" className="pb-2">
            Database
          </Text>
          <Text color="secondary">
            The database backup includes database schema, database data and
            Hasura metadata. It does not include the actual files in Storage.
          </Text>
        </div>

        <BackupList />
      </div>
    </TabsContent>
  );
}

export default ScheduledBackupTabContent;
