#  Analytics

Integrate with Google Analytics

### Getting credentials

<iframe width="100%" height="360" src="https://www.youtube.com/embed/lsx-HLJhoIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


- Go to [https://console.developers.google.com/apis/dashboard](https://console.developers.google.com/apis/dashboard) and create a new project.

![](/images/g-analytics-1.jpg)

![](/images/g-analytics-2.jpg)

- Select your project and click on **"ENABLE APIS AND SERVICES"**:

![](/images/g-analytics-3.jpg)

- Enable API:

![](/images/g-analytics-4.jpg)

![](/images/g-analytics-5.jpg)

![](/images/g-analytics-6.jpg)

- Generate service account key:

![](/images/g-analytics-7.jpg)

![](/images/g-analytics-8.jpg)

![](/images/g-analytics-9.jpg)

![](/images/g-analytics-10.jpg)

![](/images/g-analytics-11.jpg)

- Open JSON file and copy its content, then go to **Admin -> Settings -> General (/admin/settings/general)** and update field **"Service Account Credentials"** in Analytics plugin settings by the content from JSON file:

It will look like this:

![](/images/g-analytics-12.jpg)

### Setting Google Analytics

- Go to Google Analytics account: https://analytics.google.com/analytics/web/. Click on "Admin" => "View Settings" and copy "View ID" number, then go to /admin/settings/general and tab "Google Analytics" and paste to field View ID.

::: info
Change in Google Analytics 4 property.
:::

When creating a new property, you need to check the "Create a Universal Analytics Property" checkbox.

![](/images/g-analytics-13.jpg)

Then you will have view settings tab and **View ID**.

![](/images/g-analytics-14.jpg)

- Open JSON credentials file and copy client email. Then click on "User management" and add that email to list account. Just need view only permission.

![](/images/g-analytics-15.jpg)

![](/images/g-analytics-16.jpg)

### Setup timezone and clear cache

- Go to Admin -> Settings -> General and setup timezone to your local timezone.
  ![](/images/g-analytics-17.jpg)

- Go to Admin -> Platform Administration -> Cache management and clear your site cache.
  ![](/images/g-analytics-18.jpg)

::: warning
Analytics data in Admin dashboard is displayed daily data, so it will reset chart every day. It is displaying data from API, not realtime analytics so please wait until your site has data from API.
:::

Give your comment here if you got any problem.

Good luck!