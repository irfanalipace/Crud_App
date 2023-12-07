import { DefinedQueryObserverResult, UseQueryResult, useQuery } from "@tanstack/react-query";

import { AirtableBase } from "~/lib";
import { IClient } from "~/types";

export const useClients = (): DefinedQueryObserverResult<IClient[], Error> => {
  const query: UseQueryResult<IClient[], Error> = useQuery({
    queryKey: ["clients"],
    initialData: [],
    queryFn: async () => {
      return new Promise((resolve, reject) => {
        const records: unknown[] = [];

        AirtableBase("clients")
          .select({
            view: "Grid view",
            maxRecords: 10,
          })
          .eachPage(
            (pageRecords, fetchNextPage) => {
              records.push(...pageRecords.map(item => item.fields));
              fetchNextPage();
            },
            err => {
              if (err) {
                reject(err);
              } else {
                resolve(records);
              }
            }
          );
      });
    },
  });

  return query;
};
