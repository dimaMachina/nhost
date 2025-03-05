import { TabsContent } from '@/components/ui/v3/tabs';
import { InfoAlert } from '@/features/orgs/components/InfoAlert';

function PointInTimeTabsContent() {
  return (
    <TabsContent value="pointInTime">
      <InfoAlert>
        With PITR enabled, Scheduled backups are no longer taken. PITR provides
        more precise recovery, making additional backups unnecessary.
      </InfoAlert>
    </TabsContent>
  );
}

export default PointInTimeTabsContent;
